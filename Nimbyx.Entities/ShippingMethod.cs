
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
    
public partial class ShippingMethod
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public ShippingMethod()
    {

        this.Country = new HashSet<Country>();

    }


    public int Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public int DisplayOrder { get; set; }



    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<Country> Country { get; set; }

}

}
