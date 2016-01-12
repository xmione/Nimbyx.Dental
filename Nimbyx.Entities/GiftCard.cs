
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
    
public partial class GiftCard
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public GiftCard()
    {

        this.GiftCardUsageHistory = new HashSet<GiftCardUsageHistory>();

    }


    public int Id { get; set; }

    public Nullable<int> PurchasedWithOrderItemId { get; set; }

    public int GiftCardTypeId { get; set; }

    public decimal Amount { get; set; }

    public bool IsGiftCardActivated { get; set; }

    public string GiftCardCouponCode { get; set; }

    public string RecipientName { get; set; }

    public string RecipientEmail { get; set; }

    public string SenderName { get; set; }

    public string SenderEmail { get; set; }

    public string Message { get; set; }

    public bool IsRecipientNotified { get; set; }

    public System.DateTime CreatedOnUtc { get; set; }



    public virtual OrderItem OrderItem { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<GiftCardUsageHistory> GiftCardUsageHistory { get; set; }

}

}
