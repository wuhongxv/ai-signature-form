import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { FormHeader } from "./FormHeader";
import { NameInput } from "./NameInput";
import { UsageScenario } from "./UsageScenario";
import { StyleType } from "./StyleType";
import { ServicePackage } from "./ServicePackage";
import { SignatureStyle } from "./SignatureStyle";
import { ContactInfo } from "./ContactInfo";
import { PaymentInfo } from "./PaymentInfo";

export const SignatureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    usageScenarios: [] as string[],
    otherScenario: "",
    styleTypes: [] as string[],
    servicePackages: [] as string[],
    signatureStyle: "",
    contactMethod: "",
    wechat: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast({
        title: "请输入姓名",
        description: "姓名是必填项",
        variant: "destructive"
      });
      return;
    }

    if (formData.usageScenarios.length === 0) {
      toast({
        title: "请选择使用场景",
        description: "至少选择一个使用场景",
        variant: "destructive"
      });
      return;
    }

    if (formData.styleTypes.length === 0) {
      toast({
        title: "请选择签名风格",
        description: "至少选择一种喜欢的风格",
        variant: "destructive"
      });
      return;
    }

    if (formData.servicePackages.length === 0) {
      toast({
        title: "请选择服务套餐",
        description: "至少选择一个服务套餐",
        variant: "destructive"
      });
      return;
    }

    if (!formData.signatureStyle) {
      toast({
        title: "请选择签名样式",
        description: "请选择纯线条或彩绘签名",
        variant: "destructive"
      });
      return;
    }

    if (!formData.contactMethod) {
      toast({
        title: "请选择联系方式",
        description: "请选择微信或邮箱联系方式",
        variant: "destructive"
      });
      return;
    }

    if (formData.contactMethod === "wechat" && !formData.wechat.trim()) {
      toast({
        title: "请输入微信号",
        description: "微信号不能为空",
        variant: "destructive"
      });
      return;
    }

    if (formData.contactMethod === "email" && !formData.email.trim()) {
      toast({
        title: "请输入邮箱地址",
        description: "邮箱地址不能为空",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "表单提交成功！",
      description: "我们已收到您的签名定制需求，将在约定时间内完成设计并联系您。",
    });

    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <FormHeader />
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <NameInput
            value={formData.name}
            onChange={(name) => setFormData(prev => ({ ...prev, name }))}
          />

          <UsageScenario
            selectedScenarios={formData.usageScenarios}
            onChange={(usageScenarios) => setFormData(prev => ({ ...prev, usageScenarios }))}
            otherText={formData.otherScenario}
            onOtherTextChange={(otherScenario) => setFormData(prev => ({ ...prev, otherScenario }))}
          />

          <StyleType
            selectedStyles={formData.styleTypes}
            onChange={(styleTypes) => setFormData(prev => ({ ...prev, styleTypes }))}
          />

          <ServicePackage
            selectedPackages={formData.servicePackages}
            onChange={(servicePackages) => setFormData(prev => ({ ...prev, servicePackages }))}
          />

          <SignatureStyle
            selectedStyle={formData.signatureStyle}
            onChange={(signatureStyle) => setFormData(prev => ({ ...prev, signatureStyle }))}
          />

          <ContactInfo
            contactMethod={formData.contactMethod}
            wechat={formData.wechat}
            email={formData.email}
            onContactMethodChange={(contactMethod) => setFormData(prev => ({ ...prev, contactMethod }))}
            onWechatChange={(wechat) => setFormData(prev => ({ ...prev, wechat }))}
            onEmailChange={(email) => setFormData(prev => ({ ...prev, email }))}
          />

          <PaymentInfo />

          <div className="flex justify-center pt-8">
            <Button 
              type="submit"
              size="lg"
              className="px-12 py-4 text-lg bg-gradient-signature hover:opacity-90 transition-opacity signature-glow"
            >
              🎯 提交签名定制需求
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};