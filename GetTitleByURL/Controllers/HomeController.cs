using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GetTitleByURL.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FirstPage()
        {
            return View();
        }

        public ActionResult SecondPage()
        {
            return View();
        }        
    }
}