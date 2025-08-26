import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PaymentInfo = () => {
  return (
    <Card className="signature-glow">
      <CardHeader>
        <CardTitle className="chinese-title">
          7. 付款方式
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          请扫码支付，完成后截图作为凭证。
        </p>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="bg-gradient-artistic p-8 rounded-lg border-2 border-dashed border-signature-gold/50">
          <div className="w-48 h-48 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden">
            <img 
              src="/money.jpg" 
              alt="微信支付二维码" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-2">
            请使用微信扫描支付
          </p>
        </div>
        
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>注意</strong>：以付款时间为排单时间，默认 24 小时内交付。
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-signature-ink">客服支持</h4>
          <p className="text-sm text-muted-foreground">
            如有疑问，请联系客服微信：
          </p>
          <Button 
            variant="outline" 
            className="border-signature-gold text-signature-gold hover:bg-signature-gold hover:text-white"
          >
            <strong>wuhongxv1997</strong>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};