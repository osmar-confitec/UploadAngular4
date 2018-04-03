using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UploadApp.Models
{
    public class File
    {
        public int ProjectId { get; set; }
        public int SectionId { get; set; }
        public string FileName { get; set; }
        public int FileSize { get; set; }
        public string ImagePath { get; set; }
        public string ThumbPath { get; set; }




        

    }
}