import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface StyleTypeProps {
  selectedStyles: string[];
  onChange: (styles: string[]) => void;
}

const styleTypes = [
  { name: "商务签（简洁大气）", description: "适合正式场合" },
  { name: "艺术签（个性潇洒）", description: "展现个人魅力" },
  { name: "拖尾艺术签（流畅带装饰）", description: "优雅动感" },
  { name: "心形签（带 ❤️ 等符号）", description: "浪漫温馨" },
  { name: "情侣签（双人组合）", description: "情侣专属" },
  { name: "英文花式签（英文 + 花体）", description: "国际范儿" },
  { name: "随机推荐（交给设计师发挥）", description: "惊喜之选" }
];

export const StyleType = ({ selectedStyles, onChange }: StyleTypeProps) => {
  const handleStyleChange = (style: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedStyles, style]);
    } else {
      onChange(selectedStyles.filter(s => s !== style));
    }
  };

  return (
    <Card className="signature-glow">
      <CardHeader>
        <CardTitle className="chinese-title">
          3. 喜欢的风格类型
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {styleTypes.map((style) => (
          <div key={style.name} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gradient-artistic transition-all">
            <Checkbox
              id={style.name}
              checked={selectedStyles.includes(style.name)}
              onCheckedChange={(checked) => 
                handleStyleChange(style.name, checked as boolean)
              }
              className="border-signature-gold/50 data-[state=checked]:bg-signature-gold data-[state=checked]:border-signature-gold mt-1"
            />
            <div className="flex-1">
              <Label 
                htmlFor={style.name}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {style.name}
              </Label>
              <p className="text-xs text-muted-foreground mt-1">
                {style.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};