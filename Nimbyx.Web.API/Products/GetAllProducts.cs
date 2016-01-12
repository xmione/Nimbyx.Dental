using System.Web.Http;
using Nimbyx.Entities;
using System.Collections.Generic;
using System.Linq;
using Nimbyx.Dental.Models.Models;

namespace Nimbyx.Web.API
{
    [RoutePrefix("api/GetAllProducts")]
    public class GetAllProductsController : ApiController
    {

        [Route("")]
        public IHttpActionResult Get()
        {
            List<IProductInfo> productList = new List<IProductInfo>();
            var _db = new nimbyxdataEntities();
            var allData = _db.Product.ToList() ;
            foreach (Product product in allData)
            {
                productList.Add(new ProductInfo() { Name = product.Name});
            }

            //var allSelectedProducts = _db.SelectedProducts;
            //_db.SelectedProducts.RemoveRange(allSelectedProducts);

            //foreach (Product product in allData)
            //{
            //    _db.SelectedProducts.Add(new SelectedProduct() { ItemCode = product.ItemCode });
            //}
            //_db.SaveChanges();
            //var data = _db.SelectedProducts;

            return Ok(productList);
        }

    }
}