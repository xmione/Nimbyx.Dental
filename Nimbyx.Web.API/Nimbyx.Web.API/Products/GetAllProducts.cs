using System;
using System.Linq;
using System.Linq.Expressions;
using System.Web.Http;
using System.Threading.Tasks;
using Nimbyx.Entities;

namespace Nimbyx.Web.API
{
    [RoutePrefix("api/GetAllProducts")]
    public class GetAllProductsController : ApiController
    {

        [Route("")]
        public IHttpActionResult Get()
        {
            var _db = new nimbyxdataEntities();
            var allData = _db.Product;
            //var allSelectedProducts = _db.SelectedProducts;
            //_db.SelectedProducts.RemoveRange(allSelectedProducts);

            //foreach (Product product in allData)
            //{
            //    _db.SelectedProducts.Add(new SelectedProduct() { ItemCode = product.ItemCode });
            //}
            //_db.SaveChanges();
            //var data = _db.SelectedProducts;

            return Ok(allData);
        }

    }
}