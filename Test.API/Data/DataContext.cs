using Microsoft.EntityFrameworkCore;
using Test.API.Models;

namespace Test.API.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Item> Items { get; set; }

        public DataContext (DbContextOptions<DataContext> options) : base(options) 
        {
        }
    }
}