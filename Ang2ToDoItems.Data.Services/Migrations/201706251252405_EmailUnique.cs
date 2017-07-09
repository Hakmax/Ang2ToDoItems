namespace Ang2ToDoItems.Data.Services.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class EmailUnique : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.AspNetUsers", "Email", unique: true);
        }
        
        public override void Down()
        {
            DropIndex("dbo.AspNetUsers", new[] { "Email" });
        }
    }
}
