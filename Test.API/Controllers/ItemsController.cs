using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Test.API.Data;
using Test.API.Models;

namespace Test.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly DataContext _context;

        public ItemsController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetItems() 
        {
            var items = await _context.Items.ToListAsync();
            return Ok(items);
        }


        [HttpPost("add")] 
        public async Task<IActionResult> AddItem(Item itemPost) 
        {
            var item = new Item();
            item.Name = itemPost.Name;
            item.Done = false;

            _context.Items.Add(item);
            await _context.SaveChangesAsync();

            return Ok();
        }
        

        [HttpPut("{id}")]
        public async Task<IActionResult> EditItem(int id, Item itemPost) 
        {
            var item = await _context.Items.FirstOrDefaultAsync(itm => itm.Id == id);
            item.Name = itemPost.Name;
            item.Done = itemPost.Done;

            _context.Items.Update(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}