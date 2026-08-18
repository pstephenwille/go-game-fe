import { useState } from 'react';
import { cn, Drawer } from '@heroui/react';
import { MainNav } from '@/components/app-shell/main-nav';


export default ()=>{
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return(<div>

    <aside
      className={cn(
        "fixed left-0 top-0 h-screen transition-[width]",
        sidebarCollapsed ? "w-16" : "w-60"
      )}
    >
      <Drawer>
        <Drawer.Backdrop variant={'transparent'}>
          <Drawer.Content placement={'right'}>
            <Drawer.Dialog>
              <Drawer.Handle />
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>
                  drawer heading
                </Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
          <MainNav collapsed={sidebarCollapsed} />
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </aside>

  </div>)
}