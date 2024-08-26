import { Button } from "@/components/button"
import { AdminMenu } from "../menu"


export default function Vaccine() {

    const vaccines = [
        { vaccine: "Sinovac" },
        { vaccine: "AstraZeneca" },
        { vaccine: "Pfizer-BioNTech" },
        { vaccine: "Moderna" },
        { vaccine: "Johnson & Johnson" },
        { vaccine: "Sinopharm" },
        { vaccine: "Covaxin" },
        { vaccine: "Sputnik V" },
        { vaccine: "Abdala" },
        { vaccine: "Covavax" },
    ]

    return (
        <>
        <AdminMenu/>
        <Button name="Add" icon="add" url="/admin/add" />
        <div className="border p-4 mt-2">
                <table className="w-full">
                    <thead>
                        <tr className="text-left border-b">
                            <th>NO.</th>
                            <th>Vaccine</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vaccines.length > 0 ? (
                            vaccines.map((vaccine, index) => (
                                <tr key={index} className="border-b">
                                    <td>{index + 1}</td>
                                    <td>{vaccine?.vaccine}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Button name="Edit" icon="edit" url={`/admin/vaccine/${index + 1}/edit`} />
                                            <Button name="Delete" icon="delete" url="/admin/vaccine/id/edit" />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>ไม่มีข้อมูล</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        

        </>
    )
}