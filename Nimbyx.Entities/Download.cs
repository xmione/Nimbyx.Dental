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
    
    public partial class Download
    {
        public int Id { get; set; }
        public System.Guid DownloadGuid { get; set; }
        public bool UseDownloadUrl { get; set; }
        public string DownloadUrl { get; set; }
        public byte[] DownloadBinary { get; set; }
        public string ContentType { get; set; }
        public string Filename { get; set; }
        public string Extension { get; set; }
        public bool IsNew { get; set; }
    }
}
