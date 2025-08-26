import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface UsageScenarioProps {
  selectedScenarios: string[];
  onChange: (scenarios: string[]) => void;
  otherText: string;
  onOtherTextChange: (text: string) => void;
}

const scenarios = [
  "合同 / 商务文件",
  "社交签名（朋友圈、社交账号）",
  "情侣签 / 礼物",
  "其他（请备注）"
];

export const UsageScenario = ({ 
  selectedScenarios, 
  onChange, 
  otherText, 
  onOtherTextChange 
}: UsageScenarioProps) => {
  const handleScenarioChange = (scenario: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedScenarios, scenario]);
    } else {
      onChange(selectedScenarios.filter(s => s !== scenario));
    }
  };

  return (
    <Card className="signature-glow">
      <CardHeader>
        <CardTitle className="chinese-title">
          2. 使用场景
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {scenarios.map((scenario) => (
          <div key={scenario} className="flex items-center space-x-3">
            <Checkbox
              id={scenario}
              checked={selectedScenarios.includes(scenario)}
              onCheckedChange={(checked) => 
                handleScenarioChange(scenario, checked as boolean)
              }
              className="border-signature-gold/50 data-[state=checked]:bg-signature-gold data-[state=checked]:border-signature-gold"
            />
            <Label 
              htmlFor={scenario}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {scenario}
            </Label>
          </div>
        ))}
        
        {selectedScenarios.includes("其他（请备注）") && (
          <div className="mt-3 ml-6">
            <Input
              placeholder="请详细说明使用场景..."
              value={otherText}
              onChange={(e) => onOtherTextChange(e.target.value)}
              className="border-signature-gold/30 focus:border-signature-gold focus:ring-signature-gold/20"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};