import { Card } from '../atoms/Card';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

interface ContactCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  buttonText?: string;
  backgroundColor: string;
  showForm?: boolean;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  title,
  icon,
  description,
  buttonText,
  backgroundColor,
  showForm = false
}) => {
  return (
    <Card className={`${backgroundColor} text-white border-0`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold">{title}</h3>
        
        <p className="text-sm opacity-90 leading-relaxed">
          {description}
        </p>
        
        {showForm && (
          <div className="w-full mt-4 space-y-4">
            <Input 
              type="email" 
              placeholder="EMAIL" 
              className="bg-white text-gray-900 placeholder-gray-500"
            />
            <Button 
              className="w-full bg-[#1E3374] text-white hover:bg-[#0f1f4a] font-semibold py-2"
            >
              {buttonText}
            </Button>
          </div>
        )}
        
        {buttonText && !showForm && (
          <Button 
            className="bg-[#1E3374] text-white hover:bg-[#0f1f4a] font-semibold py-2 px-6"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </Card>
  );
};
