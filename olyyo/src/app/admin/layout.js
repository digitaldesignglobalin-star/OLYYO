

// import AdminHeader from '@/components/admin/Header';
// import AdminSidebar from '@/components/admin/Sidebar';

export const metadata = {
  title: 'OLYYO Admin Dashboard',
  description: 'Admin panel for OLYYO food delivery platform',
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      {/* <AdminHeader/>
      <AdminSidebar /> */}
      <div className="lg:pl-64">
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}