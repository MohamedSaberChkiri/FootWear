import HomeBrowser from '@/components/HomeBrowser'
import React, { Suspense } from 'react'

function page() {
  return (
    <div>


        <Suspense fallback={<>Loading...</>}>
             <HomeBrowser/>
        </Suspense>

    </div>
  )
}

export default page