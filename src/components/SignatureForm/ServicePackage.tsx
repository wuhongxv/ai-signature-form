import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ServicePackageProps {
  selectedPackages: string[];
  onChange: (packages: string[]) => void;
}

const packages = [
  { 
    name: "标准签名（含 3 款设计方案，任选其一）", 
    price: "¥9.9",
    description: "基础套餐，性价比首选"
  },
  { 
    name: "加急服务（9:00-21点期间，2小时内交付）", 
    price: "+¥5",
    description: "可插队加急，快速交付"
  }
];

export const ServicePackage = ({ selectedPackages, onChange }: ServicePackageProps) => {
  const handlePackageChange = (packageName: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedPackages, packageName]);
    } else {
      onChange(selectedPackages.filter(p => p !== packageName));
    }
  };

  const calculateTotal = () => {
    let total = 0;
    if (selectedPackages.includes("标准签名（含 3 款设计方案，任选其一）")) total += 9.9;
    if (selectedPackages.includes("加急服务（9:00-21点期间，2小时内交付）")) total += 5;
    return total;
  };

  return (
    <Card className="signature-glow">
      <CardHeader>
        <CardTitle className="chinese-title">
          4. 服务套餐
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {packages.map((pkg) => (
          <div 
            key={pkg.name} 
            className="flex items-start space-x-3 p-4 rounded-lg border border-signature-gold/20 hover:bg-gradient-artistic transition-all"
          >
            <Checkbox
              id={pkg.name}
              checked={selectedPackages.includes(pkg.name)}
              onCheckedChange={(checked) => 
                handlePackageChange(pkg.name, checked as boolean)
              }
              className="border-signature-gold/50 data-[state=checked]:bg-signature-gold data-[state=checked]:border-signature-gold mt-1"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <Label 
                  htmlFor={pkg.name}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {pkg.name}
                </Label>
                <span className="text-signature-red font-bold text-lg">
                  {pkg.price}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {pkg.description}
              </p>
            </div>
          </div>
        ))}
        
        {selectedPackages.length > 0 && (
          <div className="mt-6 p-4 bg-gradient-signature rounded-lg">
            <div className="text-center">
              <p className="text-white text-sm mb-2">预计总价</p>
              <p className="text-white text-2xl font-bold">
                ¥{calculateTotal()}
              </p>
            </div>
          </div>
        )}
        
        <div className="mt-4 p-3 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground">
            💡 示例：标准签名 + 加急 = ¥14.9
          </p>
        </div>
      </CardContent>
    </Card>
  );
};