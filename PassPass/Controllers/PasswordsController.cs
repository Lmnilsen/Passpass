using PassPass.Models;
using PassPass.Services;
using Microsoft.AspNetCore.Mvc;

namespace PassPass.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PasswordsController : ControllerBase
{
    private readonly PasswordsService _passwordsService;

    public PasswordsController(PasswordsService passwordsService) =>
        _passwordsService = passwordsService;

    [HttpGet]
    public async Task<List<Password>> Get() =>
        await _passwordsService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Password>> Get(string id)
    {
        var password = await _passwordsService.GetAsync(id);

        if (password is null)
        {
            return NotFound();
        }

        return password;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Password newPassword)
    {
        await _passwordsService.CreateAsync(newPassword);

        return CreatedAtAction(nameof(Get), new { id = newPassword.Id }, newPassword);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Password updatedPassword)
    {
        var password = await _passwordsService.GetAsync(id);

        if (password is null)
        {
            return NotFound();
        }

        updatedPassword.Id = password.Id;

        await _passwordsService.UpdateAsync(id, updatedPassword);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var password = await _passwordsService.GetAsync(id);

        if (password is null)
        {
            return NotFound();
        }

        await _passwordsService.RemoveAsync(id);

        return NoContent();
    }
}