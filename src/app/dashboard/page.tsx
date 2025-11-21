export default function DashboardPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Teplota</h2>
                <p className="text-4xl font-bold">22°C</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Spotreba</h2>
                <p className="text-3xl font-bold">340W</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Zariadenia</h2>
                <p className="text-2xl font-bold">12 aktívnych</p>
            </div>
        </div>
    );
}