import Link from "next/link"

export const AdminPais = () => {
    return (
        <div style={{ color: 'orange', fontWeight: 'bold' }}>
            <Link href="/admin">
                <a style={{ marginRight: 10 }}>Admin pealeht</a>
            </Link>
            <Link href="/admin/matkad">
                <a style={{ marginRight: 10 }}>Matkade haldus</a>
            </Link>
            <Link href="/admin/kontakt">
                <a>Kontakt</a>
            </Link>
        </div>
    )
}

const AdminPealeht = () => {
    return (
        <div style={{ padding:30 }}>
            <h1>Matkaklubi admin leht</h1>
            <AdminPais />
        </div>
    )
}

export default AdminPealeht