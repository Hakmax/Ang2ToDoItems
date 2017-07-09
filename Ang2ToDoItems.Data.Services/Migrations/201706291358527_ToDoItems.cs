namespace Ang2ToDoItems.Data.Services.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ToDoItems : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ToDoItemCategory",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ApplicationUserId = c.String(maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 255),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUserId)
                .Index(t => t.ApplicationUserId);
            
            CreateTable(
                "dbo.ToDoItem",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Comment = c.String(),
                        Status = c.Int(nullable: false),
                        CreatedOn = c.DateTime(nullable: false),
                        UpdatedOn = c.DateTime(),
                        ApplicationUserId = c.String(maxLength: 128),
                        ToDoItemCategoryId = c.Int(),
                        Name = c.String(nullable: false, maxLength: 255),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUserId)
                .ForeignKey("dbo.ToDoItemCategory", t => t.ToDoItemCategoryId)
                .Index(t => t.ApplicationUserId)
                .Index(t => t.ToDoItemCategoryId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ToDoItem", "ToDoItemCategoryId", "dbo.ToDoItemCategory");
            DropForeignKey("dbo.ToDoItem", "ApplicationUserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.ToDoItemCategory", "ApplicationUserId", "dbo.AspNetUsers");
            DropIndex("dbo.ToDoItem", new[] { "ToDoItemCategoryId" });
            DropIndex("dbo.ToDoItem", new[] { "ApplicationUserId" });
            DropIndex("dbo.ToDoItemCategory", new[] { "ApplicationUserId" });
            DropTable("dbo.ToDoItem");
            DropTable("dbo.ToDoItemCategory");
        }
    }
}
