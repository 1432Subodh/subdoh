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
            <div className='w-full min-h-screen pt-[68px]'>
                
                {children}
            </div>

        </section>
    )
}