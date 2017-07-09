namespace Ang2ToDoItems.Data.Services.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ClientProfileChanges : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ClientProfile", "BirthDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ClientProfile", "BirthDate");
        }
    }
}
