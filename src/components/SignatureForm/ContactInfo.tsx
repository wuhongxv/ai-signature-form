import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ContactInfoProps {
  contactMethod: string;
  wechat: string;
  email: string;
  onContactMethodChange: (method: string) => void;
  onWechatChange: (wechat: string) => void;
  onEmailChange: (email: string) => void;
}

export const ContactInfo = ({
  contactMethod,
  wechat,
  email,
  onContactMethodChange,
  onWechatChange,
  onEmailChange
}: ContactInfoProps) => {
  return (
    <Card className="signature-glow">
      <CardHeader>
        <CardTitle className="chinese-title">
          6. 联系方式
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          请选择一种联系方式以接收签名：
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup value={contactMethod} onValueChange={onContactMethodChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="wechat" id="wechat" className="border-signature-gold/50 text-signature-gold" />
            <Label htmlFor="wechat" className="font-medium">微信号</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" className="border-signature-gold/50 text-signature-gold" />
            <Label htmlFor="email" className="font-medium">邮箱</Label>
          </div>
        </RadioGroup>

        {contactMethod === "wechat" && (
          <div className="space-y-2">
            <Label htmlFor="wechat-input" className="text-sm font-medium">
              微信号
            </Label>
            <Input
              id="wechat-input"
              placeholder="请输入您的微信号..."
              value={wechat}
              onChange={(e) => onWechatChange(e.target.value)}
              className="border-signature-gold/30 focus:border-signature-gold focus:ring-signature-gold/20"
            />
          </div>
        )}

        {contactMethod === "email" && (
          <div className="space-y-2">
            <Label htmlFor="email-input" className="text-sm font-medium">
              邮箱地址
            </Label>
            <Input
              id="email-input"
              type="email"
              placeholder="请输入您的邮箱地址..."
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="border-signature-gold/30 focus:border-signature-gold focus:ring-signature-gold/20"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};