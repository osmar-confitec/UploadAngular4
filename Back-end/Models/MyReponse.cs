using System;

namespace Back_end.Models
{
    public class MyReponse
    {
        public Boolean Status { get; set; }
        public String Message { get; set; }
        public Object Result { get; set; }

        public MyReponse()
        {
            this.Status = false;
            this.Message = "Some internal error";
        }
    }
}