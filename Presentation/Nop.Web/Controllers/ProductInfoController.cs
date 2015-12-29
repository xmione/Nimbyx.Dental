using Nop.Data;
using Nop.Web.Models;
using Nop.Web.Models.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Nop.Web.Controllers
{
    public class ProductInfoController : Controller
    {
        private NopObjectContext  ctx = new NopObjectContext();
        // GET: ProductInfo
        public ActionResult Index()
        {
            return View();
        }

        // GET: All ProductInfos
        public ActionResult GetAllProducts()
        {
            var productInfo = new ProductInfo();
            var products = ctx.Database..Products;
            List<ProductInfo> productInfoList = productInfo.CastAsProductInfo(products);
            var model = productInfoList;
            ViewBag.ProductInfoList = productInfoList;
            return PartialView("_LeftNavigation", model);
        }

        // GET: ProductInfo/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ProductInfo/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ProductInfo/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: ProductInfo/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ProductInfo/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: ProductInfo/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ProductInfo/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
