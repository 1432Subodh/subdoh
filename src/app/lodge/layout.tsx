import Aside from "@/components/component/Dashboard/Aside"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            {/* <Aside /> */}
            <div className='w-full min-h-screen dark:bg-[#151518] sm:pl-[58px] sm:pr-10 pr-2 px-2 pt-[68px]'>
                
                {children}
            </div>

        </section>
    )
}