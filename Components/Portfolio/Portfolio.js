'use client'
import Image from 'next/image';
import Link from 'next/link';

const getData =async () => {
  try {
    const response = await fetch('http://localhost:3000/api/posts', {cache : 'no-store'});
  if(!response.ok) {
    throw new Error('Error to Fetch data')
  }
  return response.json();
  } catch (error) {
    console.error(error);
  }
}

const portfolio = async () => {

  const handleNumber = (filterNumber) => {
    console.log(filterNumber);
  };
const jsonData = await getData();
console.log(jsonData);
  return (
    <>
      <section className="py-20 px-3">
        <h1 className=" text-6xl mb-10 uppercase font-semibold -tracking-tighter">
          My Portfolio
        </h1>
        <div className="mt-4">
          <div>
            <ul className="flex flex-wrap gap-3 capitalize font-semibold">
              <li
                onClick={() => handleNumber("all")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer `}
              >
                all
              </li>
              <li
                onClick={() => handleNumber("landing page")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer`}
              >
                Landing page
              </li>
              <li
                onClick={() => handleNumber("nextjs page")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer `}
              >
                Next Js Page
              </li>
              <li
                onClick={() => handleNumber("tailwind css")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer `}
              >
                Tailwind CSS
              </li>
              <li
                onClick={() => handleNumber("e-Commerce")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer `}
              >
                e-Commerce
              </li>
              <li
                onClick={() => handleNumber("Bootstrap 5")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer `}
              >
                Bootstrap 5
              </li>
              <li
                onClick={() => handleNumber("Business & Corporate")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer `}
              >
                Business & Corporate
              </li>
              <li
                onClick={() => handleNumber("Portfolio")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer `}
              >
                Portfolio
              </li>
              <li
                onClick={() => handleNumber( "Educational")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer `}
              >
                Educational
              </li>
              <li
                onClick={() => handleNumber("Form Valdation")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer `}
              >
                Form Valdation
              </li>
            </ul>
          </div>

          <div>
              <div>
                {
                  jsonData.map((item, index) => (
                    <div className='mt-20 relative' key={index}>
                      <Image className='w-56 h-56 bg-cover bg-center bg-clip-content' width={40} height={40} src={item.image}></Image>
                      <div className='absolute left-0 bottom-0 flex items-center justify-center'>
                       <div>
                       <Link href={item.project_Link} target='_blank'>Demo</Link>
                       </div>
                       <div>
                       <Link href={item.github}>Live</Link>
                       </div>
                      </div>
                    </div>
                  ))
                }
              </div>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default portfolio
