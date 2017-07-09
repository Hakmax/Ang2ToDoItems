namespace Ang2ToDoItems.Data.Services.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Changes : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.ClientProfile", "ApplicationUserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.ToDoItemCategory", "ApplicationUserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.ToDoItem", "ApplicationUserId", "dbo.AspNetUsers");
            DropIndex("dbo.ClientProfile", new[] { "ApplicationUserId" });
            DropIndex("dbo.ToDoItemCategory", new[] { "ApplicationUserId" });
            DropIndex("dbo.ToDoItem", new[] { "ApplicationUserId" });
            AlterColumn("dbo.ClientProfile", "ApplicationUserId", c => c.String(nullable: false, maxLength: 128));
            AlterColumn("dbo.ToDoItemCategory", "ApplicationUserId", c => c.String(nullable: false, maxLength: 128));
            AlterColumn("dbo.ToDoItem", "ApplicationUserId", c => c.String(nullable: false, maxLength: 128));
            CreateIndex("dbo.ClientProfile", "ApplicationUserId");
            CreateIndex("dbo.ToDoItemCategory", "ApplicationUserId");
            CreateIndex("dbo.ToDoItem", "ApplicationUserId");
            AddForeignKey("dbo.ClientProfile", "ApplicationUserId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
            AddForeignKey("dbo.ToDoItemCategory", "ApplicationUserId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
            AddForeignKey("dbo.ToDoItem", "ApplicationUserId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ToDoItem", "ApplicationUserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.ToDoItemCategory", "ApplicationUserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.ClientProfile", "ApplicationUserId", "dbo.AspNetUsers");
            DropIndex("dbo.ToDoItem", new[] { "ApplicationUserId" });
            DropIndex("dbo.ToDoItemCategory", new[] { "ApplicationUserId" });
            DropIndex("dbo.ClientProfile", new[] { "ApplicationUserId" });
            AlterColumn("dbo.ToDoItem", "ApplicationUserId", c => c.String(maxLength: 128));
            AlterColumn("dbo.ToDoItemCategory", "ApplicationUserId", c => c.String(maxLength: 128));
            AlterColumn("dbo.ClientProfile", "ApplicationUserId", c => c.String(maxLength: 128));
            CreateIndex("dbo.ToDoItem", "ApplicationUserId");
            CreateIndex("dbo.ToDoItemCategory", "ApplicationUserId");
            CreateIndex("dbo.ClientProfile", "ApplicationUserId");
            AddForeignKey("dbo.ToDoItem", "ApplicationUserId", "dbo.AspNetUsers", "Id");
            AddForeignKey("dbo.ToDoItemCategory", "ApplicationUserId", "dbo.AspNetUsers", "Id");
            AddForeignKey("dbo.ClientProfile", "ApplicationUserId", "dbo.AspNetUsers", "Id");
        }
    }
}
