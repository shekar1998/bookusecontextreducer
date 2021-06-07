import axios from "axios";

    async function bookData12() {
        console.log('work');
        let array;

    await axios("http://localhost:4000/books").then((res) => res).then((data) => {
      array = data["data"];
      console.log(JSON.stringify(array["data"]));
      
    });
    return array;
  }

async function deleteBook(title: any) {

  console.log(title+'ppppppppppppppppppp');
  
    console.log("title : ", localStorage.getItem("token"));
  return  await axios.delete("http://localhost:4000/books/" + title, {
   headers:{
     "Authorization" : `${localStorage.getItem("token")}`
       },
  }).then((res) => 
  {
    console.log(res+'<------------res------->'+JSON.stringify(res))
    // return res.json()
  }).then((data) => console.log('data----------->'+data)
  )
}

//  async function isAuthorize(req:any, res:any, next:any) {
//   try {
    
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       message: 'Error in Authorization',
//     });
//   }
// }



export {
    deleteBook, bookData12
}