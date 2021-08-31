import Link from 'next/link';
import { useState } from 'react';

export const SiteHeader = () => {
  const [active, setActive] = useState(false);
  const [imgUser, setImgUser] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };


  const imgUserClick = () => {
    setImgUser(!imgUser);
  };
  return (
    <>
 <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
        <div className='flex justify-between  px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center xl:py-5'>
          <div>
            <svg className="h-8 w-auto" viewBox="0 0 185 32" fill='none' xmlns="http://www.w3.org/2000/svg">
              <path d="M121.09 28.336C123.442 28.336 125.482 27.088 126.514 25.216L123.826 23.68C123.346 24.664 122.314 25.264 121.066 25.264C119.218 25.264 117.85 23.896 117.85 22C117.85 20.08 119.218 18.712 121.066 18.712C122.29 18.712 123.322 19.336 123.802 20.32L126.466 18.76C125.482 16.912 123.442 15.664 121.09 15.664C117.442 15.664 114.754 18.424 114.754 22C114.754 25.576 117.442 28.336 121.09 28.336Z" fill="#A3BFFA" />
              <path d="M137.084 16V17.416C136.22 16.336 134.924 15.664 133.172 15.664C129.98 15.664 127.34 18.424 127.34 22C127.34 25.576 129.98 28.336 133.172 28.336C134.924 28.336 136.22 27.664 137.084 26.584V28H140.18V16H137.084ZM133.748 25.384C131.852 25.384 130.436 24.016 130.436 22C130.436 19.984 131.852 18.616 133.748 18.616C135.668 18.616 137.084 19.984 137.084 22C137.084 24.016 135.668 25.384 133.748 25.384Z" fill="#A3BFFA" />
              <path d="M149.851 18.976V16H147.139V12.64L144.043 13.576V16H141.955V18.976H144.043V23.968C144.043 27.208 145.507 28.48 149.851 28V25.192C148.075 25.288 147.139 25.264 147.139 23.968V18.976H149.851Z" fill="#A3BFFA" />
              <path d="M153.57 14.56C154.626 14.56 155.49 13.696 155.49 12.664C155.49 11.632 154.626 10.744 153.57 10.744C152.538 10.744 151.674 11.632 151.674 12.664C151.674 13.696 152.538 14.56 153.57 14.56ZM152.034 28H155.13V16H152.034V28Z" fill="#A3BFFA" />
              <path d="M163.676 28.336C167.204 28.336 170.036 25.576 170.036 22C170.036 18.424 167.204 15.664 163.676 15.664C160.148 15.664 157.34 18.424 157.34 22C157.34 25.576 160.148 28.336 163.676 28.336ZM163.676 25.312C161.852 25.312 160.436 23.944 160.436 22C160.436 20.056 161.852 18.688 163.676 18.688C165.524 18.688 166.94 20.056 166.94 22C166.94 23.944 165.524 25.312 163.676 25.312Z" fill="#A3BFFA" />
              <path d="M178.886 15.664C177.278 15.664 176.03 16.264 175.31 17.344V16H172.214V28H175.31V21.52C175.31 19.432 176.438 18.544 177.95 18.544C179.342 18.544 180.326 19.384 180.326 21.016V28H183.422V20.632C183.422 17.44 181.43 15.664 178.886 15.664Z" fill="#A3BFFA" />
              <path d="M61.0634 28.0001H64.8314L67.9754 16.9121L71.1434 28.0001H74.9114L79.6154 11.2001H76.1354L72.9194 23.6561L69.3914 11.2001H66.5594L63.0554 23.6561L59.8394 11.2001H56.3594L61.0634 28.0001Z" fill="white" />
              <path d="M85.6742 28.3361C89.2023 28.3361 92.0342 25.5761 92.0342 22.0001C92.0342 18.4241 89.2023 15.6641 85.6742 15.6641C82.1462 15.6641 79.3382 18.4241 79.3382 22.0001C79.3382 25.5761 82.1462 28.3361 85.6742 28.3361ZM85.6742 25.3121C83.8503 25.3121 82.4342 23.9441 82.4342 22.0001C82.4342 20.0561 83.8503 18.6881 85.6742 18.6881C87.5222 18.6881 88.9383 20.0561 88.9383 22.0001C88.9383 23.9441 87.5222 25.3121 85.6742 25.3121Z" fill="white" />
              <path d="M97.3083 18.0641V16.0001H94.2122V28.0001H97.3083V22.2641C97.3083 19.7441 99.3482 19.0241 100.956 19.2161V15.7601C99.4442 15.7601 97.9323 16.4321 97.3083 18.0641Z" fill="white" />
              <path d="M113.831 28.0001L108.863 21.9281L113.687 16.0001H109.991L105.863 21.2801V11.2001H102.767V28.0001H105.863V22.5521L110.231 28.0001H113.831Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M43.9111 12.6044L36.2129 8.15965V28.8051H45.2129V30.8051H1.21289V28.8051H5.21289V16.0858L1.48507 17.0177L1 15.0774L22.0896 9.80505H25.2119C24.8673 10.6225 24.6383 11.4844 24.5316 12.3637L24.0495 16.3386L29.2129 13.3574V28.8051H34.2129V8.16087L26.5166 12.6045C26.7383 10.7768 27.6279 9.04857 29.082 7.80504H24.9629C26.3311 5.98338 28.5098 4.80504 30.9639 4.80504C31.1807 4.80504 31.3965 4.81431 31.6084 4.8325L26.0166 1.60386C28.1123 0.710432 30.5879 0.779158 32.7129 2.00609C33.752 2.60582 34.5938 3.41673 35.2139 4.35325C35.834 3.41673 36.6748 2.60582 37.7139 2.00609C39.8389 0.779158 42.3154 0.710432 44.4111 1.60386L38.8184 4.8325C39.0312 4.81431 39.2471 4.80504 39.4648 4.80504C41.918 4.80504 44.0967 5.98338 45.4648 7.80504H41.3447C42.7998 9.04857 43.6895 10.7768 43.9111 12.6044ZM25.2129 28.8051V18.8051H19.2129V28.8051H25.2129ZM14.2129 20.8051C14.2129 21.9096 13.3175 22.8051 12.2129 22.8051C11.1083 22.8051 10.2129 21.9096 10.2129 20.8051C10.2129 19.7005 11.1083 18.8051 12.2129 18.8051C13.3175 18.8051 14.2129 19.7005 14.2129 20.8051Z" fill="#A3BFFA" />
            </svg>
          </div>
          <div className="flex sm:hidden">
          <button
          className='inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          type='button'
          onClick={handleClick}
        >
              <div className='flex justify-center items-center h-6 w-6 fill-current'>
                {
                  active ?
                    <svg 
                    className='align-middle'
                         width="14" 
                         height="14"
                        viewBox="0 0 14 14" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                          fillRule="evenodd" 
                          clipRule="evenodd" 
                          d="M12.7782 11.364C13.1687 11.7545 13.1687 12.3877 12.7782 12.7782C12.3877 13.1687 11.7545 13.1687 11.364 12.7782L6.53553 7.94975L1.70711 12.7782C1.31658 13.1687 0.683418 13.1687 0.292893 12.7782C-0.0976311 12.3877 -0.0976311 11.7545 0.292893 11.364L5.12132 6.53553L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.53553 5.12132L11.364 0.292893C11.7545 -0.0976311 12.3877 -0.0976311 12.7782 0.292893C13.1687 0.683418 13.1687 1.31658 12.7782 1.70711L7.94975 6.53553L12.7782 11.364Z" fill="#A0AEC0" 
                      />
                    </svg>
                    :
                    <svg
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                }
              </div>
        </button>
          </div>
        </div>
        <nav className='sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between'>
      <div className='hidden xl:block xl:relative xl:max-w-xs xl:w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <svg className='h-6 w-6 fill-current text-gray-600' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.3199 12.9056L15.4165 14.0023C15.8277 13.9795 16.2465 14.1252 16.5607 14.4393L19.5607 17.4393C20.1464 18.0251 20.1464 18.9749 19.5607 19.5607C18.9749 20.1464 18.0251 20.1464 17.4393 19.5607L14.4393 16.5607C14.1252 16.2465 13.9795 15.8277 14.0023 15.4165L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#A0AEC0"
            />
          </svg>
        </div>
        <input className="
                      block
                      w-full
                      border
                      border-transparent
                      bg-gray-200 
                      focus:outline-none 
                      focus:bg-white 
                      focus:border-gray-300
                      focus:text-gray-300 
                      text-gray-900 
                      rounded-lg 
                      pl-10 
                      pr-4 
                      py-2"
          placeholder="Search by keywords"
        />
      </div>
          <div className='sm:flex sm:items-center'>
          <div className={`${
            active ? '' : 'hidden'
          }   w-full sm:inline-flex sm:flex-grow sm:w-auto`}
        >
          <div className='px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0'
                >
            <Link href='/'>
                 <a 
                 href="#" 
                 className='
                          block 
                          px-3 
                          py-1 
                          rounded 
                          font-semibold 
                          text-white 
                          sm:text-sm
                          sm:px-2
                          xl:text-gray-900
                          hover:bg-gray-200
                          '
                  >
                            List your property
                  </a>

            </Link>
            <Link href='/'>
                 <a 
                  href="#" 
                  className='
                          mt-1 
                          block
                          px-3 
                          py-1 
                          rounded 
                          font-semibold 
                          text-white 
                          hover:bg-gray-200
                          sm:mt-0
                          sm:text-sm
                          sm:px-2
                          sm:ml-2
                          xl:text-gray-900
                          '
                  >
                    Trips
                 </a>

            </Link>
            <Link href='/'>
              <a 
                href="#" 
                className='
                          mt-1 
                          block 
                          px-3 
                          py-1 
                          rounded 
                          font-semibold 
                          text-white 
                          hover:bg-gray-200
                          sm:mt-0
                          sm:text-sm
                          sm:px-2
                          sm:ml-2
                          xl:text-gray-900
                          '
                >
                  Messages
              </a>

            </Link>
          </div>

          <div className='relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0'>
            <div className='flex items-center sm:hidden'>
              <img  className='h-10 w-10 object-cover rounded-full border-2 border-gray-600' src="images/avatar.png" alt="avatar" />
              <span className='ml-4 font-semibold text-gray-200 sm:hidden'>Isla Schoger</span>
            </div>
            <button type='button' onClick={imgUserClick} className='hidden sm:block sm:h-8 sm:w-8 sm:overflow-hidden sm:rounded-full sm:border-2 sm:border-gray-600 sm:focus:outline-none sm:focus:border-white  xl:border-gray-300'>
            <img  className='h-full w-full object-cover' src="images/avatar.png" alt="avatar" />
            </button>
            {imgUser ?
            <div className='mt-3 sm:bg-white sm:border sm:rounded-lg sm:absolute sm:mt-3 sm:right-0 sm:w-48 sm:py-2 sm:shadow-xl'>
              <a href="#" className='block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-2 sm:hover:bg-indigo-500'>Account Settings</a>
              <a href="#" className='mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-2 sm:hover:bg-indigo-500'>Support</a>
              <a href="#" className='mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-2 sm:hover:bg-indigo-500'>Sign out</a>
            </div>
            : ""            
          }
          </div>
        </div>
          </div>

        </nav>
      </header>
    </>
  );
};