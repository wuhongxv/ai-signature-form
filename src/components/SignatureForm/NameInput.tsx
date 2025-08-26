import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const NameInput = ({ value, onChange }: NameInputProps) => {
  return (
    <Card className="signature-glow">
      <CardHeader>
        <CardTitle className="chinese-title flex items-center gap-2">
          1. 你的名字
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          请输入要设计的签名名字（中文或英文均可）
        </p>
        <p className="text-xs text-signature-gold">
          示例：张佳思 / Alice / ZJAS
        </p>
      </CardHeader>
      <CardContent>
        <Label htmlFor="name" className="sr-only">
          姓名
        </Label>
        <Input
          id="name"
          placeholder="请输入您的姓名..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-lg h-12 border-signature-gold/30 focus:border-signature-gold focus:ring-signature-gold/20"
        />
      </CardContent>
    </Card>
  );
};