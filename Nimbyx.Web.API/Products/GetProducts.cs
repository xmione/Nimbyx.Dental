using System;
using System.Linq;
using System.Linq.Expressions;
using System.Web.Http;
using System.Threading.Tasks;
using Nimbyx.Entities;

namespace MNC.ETL.WEB.Controllers.Products
{
    [RoutePrefix("api/GetProducts")]
    public class GetProductsController : ApiController
    {

        //Product[] products = new Product[] 
        //{ 
        //    new Product { ItemCode = 1, ProductName = "Fita Singles 30g" }, 
        //    new Product { ItemCode = 2, ProductName = "LM Pancit Canton Sweet and Spicy 60g" }
        //    //,
        //    // new Product { ItemCode = 3, ProductName = "JellyAce" }, 
        //    //new Product { ItemCode = 4, ProductName = "Hi-C" },
        //    // new Product { ItemCode = 5, ProductName = "SkyFlakes" }, 
        //    //new Product { ItemCode = 6, ProductName = "Nissin Biscuits" },
        //};

        //[Authorize]
        [Route("")]
        public IHttpActionResult Get([FromUri] int row, int display)
        {
            var _db = new nimbyxdataEntities();

            var data = _db.Product.OrderBy( p => p.Name).Skip(row).Take(display);
            //var data = products;

            return Ok(data);
        }

    }
}