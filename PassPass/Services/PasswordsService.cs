using System;
using PassPass.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace PassPass.Services;

public class PasswordsService
{
    private readonly IMongoCollection<Password> _passwordsCollection;

    public PasswordsService(
        IOptions<PasswordDataDatabaseSettings> passwordDataDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            // Environment.GetEnvironmentVariable("MONGO_URL"));
            passwordDataDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            passwordDataDatabaseSettings.Value.DatabaseName);

        _passwordsCollection = mongoDatabase.GetCollection<Password>(
            passwordDataDatabaseSettings.Value.PasswordsCollectionName);
    }

    public async Task<List<Password>> GetAsync() =>
        await _passwordsCollection.Find(_ => true).ToListAsync();

    public async Task<Password?> GetAsync(string id) =>
        await _passwordsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Password newPassword) =>
        await _passwordsCollection.InsertOneAsync(newPassword);

    public async Task UpdateAsync(string id, Password updatedPassword) =>
        await _passwordsCollection.ReplaceOneAsync(x => x.Id == id, updatedPassword);

    public async Task RemoveAsync(string id) =>
        await _passwordsCollection.DeleteOneAsync(x => x.Id == id);
}
