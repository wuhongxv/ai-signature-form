import { Card } from "@/components/ui/card";

export const FormHeader = () => {
  return (
    <Card className="p-8 text-center bg-gradient-artistic border-signature-gold/20 signature-glow">
      <div className="chinese-title text-4xl mb-4 bg-gradient-signature bg-clip-text text-transparent">
        🎨 艺术签名定制表单
      </div>
      <p className="text-lg text-muted-foreground mb-2">
        请填写以下信息完成提交，我们会在 <span className="text-signature-red font-semibold">24 小时内交付签名设计</span>。
      </p>
      <p className="text-sm text-muted-foreground">
        如需加急，请勾选加急选项，<span className="text-signature-gold font-semibold">1 小时内交付</span>。
      </p>
    </Card>
  );
};