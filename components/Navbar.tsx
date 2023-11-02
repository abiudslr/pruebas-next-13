"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { ThemeToggle } from '@/components/ThemeTogle';

import { useTranslations } from 'next-intl';
import Link from "next/link";
  

export function Navbar(){
    const t = useTranslations('Navbar');
    return (
        <div className='border-b-2 border-slate-100 dark:border-slate-900'>
            <div className="flex justify-between items-center py-2 container mx-auto">
                <h1 className="flex-none font-bold text-2xl">App</h1>
                <NavigationMenu className="flex-1">
                    <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {t('home')}
                        </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/accounts" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {t("accounts")}
                        </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/balance" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {t("balance")}
                        </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>+</NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <NavigationMenuLink>Otras cosas</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>          
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex-none">
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    );
}