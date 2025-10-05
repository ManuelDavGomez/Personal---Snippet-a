import React from 'react'

const PagesLayout = ({children}) => {
  return (
     <section className="flex justify-center flex-col items-center w-full p-5 !pt-50 pb-70">
      <article className="flex justify-center flex-col items-center w-[100%] min-[450px]:w-[80%] min-[768px]:w-full min-[1150px]:w-[1100px] text-white">
        {children}
      </article>
    </section>
  )
}

export default PagesLayout