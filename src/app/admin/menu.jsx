import { Button } from "@/components/button"

export function AdminMenu({ children }) {

    const menus = [
        { name: "Faculty", icon: "menu_book", url: "/admin/faculty" },
        { name: "Program", icon: "star", url: "/admin/program" },
        { name: "Student", icon: "groups", url: "/admin/student" },
        { name: "Vaccine", icon: "vaccines", url: "/admin/vaccine" },
        { name: "Vaccine Record", icon: "library_books", url: "/admin/vaccine_record" },
    ]

    return (
        <div className="w-[80%] mx-auto">
        <h1 className="text-center">Admin</h1>

        <div className="flex gap-4 items-center justify-center my-4">
            {menus.length > 0 ? (
                menus.map((menu, index) => (
                    <Button key={index} url={menu?.url} icon={menu?.icon} name={menu?.name} />
                ))
            ) : (
                <div>
                    ไม่มีเมนู
                </div>
            )}
        </div>

        {children}

    </div>

    )
}