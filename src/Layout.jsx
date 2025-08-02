
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  LayoutDashboard, 
  ArrowUpDown, 
  PiggyBank, 
  TrendingUp, 
  BarChart3,
  Wallet,
  Menu,
  X,
  LogOut,
  Sparkles
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/Components/ui/sidebar";
import { Button } from "@/Components/ui/button";
// import { User } from "@/Entities/User";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: LayoutDashboard,
    color: "text-blue-600"
  },
  {
    title: "Transactions",
    url: createPageUrl("Transactions"),
    icon: ArrowUpDown,
    color: "text-green-600"
  },
  {
    title: "Savings",
    url: createPageUrl("Savings"),
    icon: PiggyBank,
    color: "text-purple-600"
  },
  {
    title: "Markets",
    url: createPageUrl("Markets"),
    icon: TrendingUp,
    color: "text-orange-600"
  },
  {
    title: "Analytics",
    url: createPageUrl("Analytics"),
    icon: BarChart3,
    color: "text-indigo-600"
  },
  {
    title: "AI Advisor",
    url: createPageUrl("Chatbot"),
    icon: Sparkles,
    color: "text-pink-600"
  }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await User.me();
        setUser(currentUser);
      } catch (e) {
        // Not logged in
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await User.logout();
    navigate(createPageUrl("Dashboard")); // The platform will handle the redirect to login
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Sidebar className="border-r border-slate-200/60 bg-white/95 backdrop-blur-sm flex flex-col">
          <SidebarHeader className="border-b border-slate-200/60 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
                  FinMate
                </h2>
                <p className="text-xs text-slate-500 font-medium">Smart Financial Management</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4 flex-1">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-2">
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`group hover:bg-slate-50 hover:shadow-sm transition-all duration-200 rounded-xl p-3 ${
                          location.pathname === item.url 
                            ? 'bg-blue-50 border border-blue-100 shadow-sm' 
                            : ''
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3">
                          <item.icon className={`w-5 h-5 ${
                            location.pathname === item.url 
                              ? item.color 
                              : 'text-slate-500 group-hover:text-slate-700'
                          }`} />
                          <span className={`font-medium ${
                            location.pathname === item.url 
                              ? 'text-slate-900' 
                              : 'text-slate-600 group-hover:text-slate-900'
                          }`}>
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Nepal's #1</h3>
                <p className="text-sm text-slate-600 mb-3">Financial Management Platform</p>
                <div className="text-xs text-slate-500">
                  Built for Nepali investors
                </div>
              </div>
            </div>
          </SidebarContent>

          <div className="p-4 border-t border-slate-200/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-medium text-lg">
                  {user?.fullName?.[0]?.toUpperCase() || 'U'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 text-sm truncate">{user?.fullName || 'User'}</p>
                <p className="text-xs text-slate-500 truncate">{user?.email || 'Manage your account'}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Sidebar>

        <main className="flex-1 flex flex-col min-w-0">
          <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 px-6 py-4 lg:hidden">
            <div className="flex items-center justify-between">
              <SidebarTrigger className="hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200" />
              <div className="flex items-center gap-2">
                <Wallet className="w-6 h-6 text-blue-600" />
                <h1 className="text-lg font-bold text-slate-900">FinMate</h1>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
