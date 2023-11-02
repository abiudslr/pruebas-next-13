import { useTranslations } from 'next-intl';
import { Skeleton } from "@/components/ui/skeleton"

export default function Accounts(){
    const t = useTranslations('Navbar');
    
    return (
      <>
        <h1>{t("accounts")}</h1>
        <div className="w-full flex flex-col items-center space-y-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((value, index) => {
            return (
              <div key={index} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
}