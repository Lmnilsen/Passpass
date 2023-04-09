namespace PassPass.Models;

public class PasswordDataDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string PasswordsCollectionName { get; set; } = null!;
}
