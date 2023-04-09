using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace PassPass.Models;

public class Password
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    //[BsonElement("Name")]
    //[JsonPropertyName("Name")]
    public string appUsername { get; set; } = null!;

    public string websiteUsername { get; set; } = null!;

    public string website { get; set; } = null!;

    public string password { get; set; } = null!;
}