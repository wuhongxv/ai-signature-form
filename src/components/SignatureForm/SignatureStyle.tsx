import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface SignatureStyleProps {
  selectedStyle: string;
  onChange: (style: string) => void;
}

const styles = [
  {
    value: "line",
    name: "纯线条签名（黑白简洁）",
    description: "经典黑白线条，适合正式文档"
  },
  {
    value: "colored",
    name: "彩绘签名（带颜色，更美观）",
    description: "彩色渐变效果，更加精美"
  }
];

export const SignatureStyle = ({ selectedStyle, onChange }: SignatureStyleProps) => {
  return (
    <Card className="signature-glow">
      <CardHeader>
        <CardTitle className="chinese-title">
          5. 签名样式
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedStyle} onValueChange={onChange} className="space-y-4">
          {styles.map((style) => (
            <div 
              key={style.value} 
              className="flex items-start space-x-3 p-4 rounded-lg border border-signature-gold/20 hover:bg-gradient-artistic transition-all"
            >
              <RadioGroupItem 
                value={style.value} 
                id={style.value}
                className="border-signature-gold/50 text-signature-gold mt-1" 
              />
              <div className="flex-1">
                <Label 
                  htmlFor={style.value}
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
        </RadioGroup>
      </CardContent>
    </Card>
  );
};