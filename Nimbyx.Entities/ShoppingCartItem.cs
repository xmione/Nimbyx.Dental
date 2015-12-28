//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Nimbyx.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class ShoppingCartItem
    {
        public int Id { get; set; }
        public int StoreId { get; set; }
        public int ShoppingCartTypeId { get; set; }
        public int CustomerId { get; set; }
        public int ProductId { get; set; }
        public string AttributesXml { get; set; }
        public decimal CustomerEnteredPrice { get; set; }
        public int Quantity { get; set; }
        public Nullable<System.DateTime> RentalStartDateUtc { get; set; }
        public Nullable<System.DateTime> RentalEndDateUtc { get; set; }
        public System.DateTime CreatedOnUtc { get; set; }
        public System.DateTime UpdatedOnUtc { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual Product Product { get; set; }
    }
}
