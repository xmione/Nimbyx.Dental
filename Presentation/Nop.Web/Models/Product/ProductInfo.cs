using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Nop.Web.Models.Product
{
    public class ProductInfo : Nop.Core.Domain.Catalog.Product
    {
        public ProductInfo()
        {
        }
        public List<ProductInfo> CastAsProductInfo(System.Data.Entity.DbSet<Nop.Core.Domain.Catalog.Product> productList)
        {
            List<ProductInfo> productInfoList = new List<ProductInfo>();
            foreach (Nop.Core.Domain.Catalog.Product product in productList)
            {
                ProductInfo productInfo = (ProductInfo)product;
                productInfoList.Add(productInfo);
            }
            return productInfoList;
        }
    }
}
