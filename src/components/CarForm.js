import React from 'react';
import { Form, Input, InputNumber, Button, Select, Divider } from 'antd';
import { SaveOutlined, CarOutlined, DollarOutlined, IdcardOutlined, WalletOutlined, BankOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const carBrands = [
  "Toyota", "Honda", "Ford", "Chevrolet", "Nissan",
  "Volkswagen", "Hyundai", "Kia", "BMW", "Mercedes-Benz",
  "Audi", "Lexus", "Subaru", "Mazda", "Jeep"
];

function CarForm({ onAddRepair, initialValues, isEditing, onCancelEdit }) {
  const [form] = Form.useForm();
  // Watch payment mode to conditionally show account number
  const paymentMode = Form.useWatch('paymentMode', form);

  // Update form values when initialValues change
  React.useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const onFinish = (values) => {
    onAddRepair(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="custom-form"
      requiredMark={false}
    >
      <Form.Item
        name="carMark"
        label="Car Brand / Mark"
        rules={[{ required: true, message: 'Please select the car brand' }]}
      >
        <Select
          placeholder="Select Car Brand"
          showSearch
          className="custom-select"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          suffixIcon={<CarOutlined style={{ color: '#b2bec3' }} />}
        >
          {carBrands.map(brand => (
            <Option key={brand} value={brand}>{brand}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="carYear"
        label="Car Year"
        rules={[
          { required: true, message: 'Please enter the car year' },
          { type: 'number', min: 1900, max: new Date().getFullYear() + 1, message: 'Please enter a valid year' }
        ]}
      >
        <InputNumber
          placeholder="e.g. 2015"
          style={{ width: '100%' }}
          className="custom-input"
        />
      </Form.Item>

      <Form.Item
        name="carPlate"
        label="Car Plate Number"
        rules={[{ required: true, message: 'Please enter the plate number' }]}
      >
        <Input
          placeholder="e.g. RAD 123 A"
          prefix={<IdcardOutlined style={{ color: '#b2bec3' }} />}
          className="custom-input"
        />
      </Form.Item>

      <Form.Item
        name="problem"
        label="Problem Before Repair"
        rules={[
          { required: true, message: 'Please describe the problem' },
          { min: 5, message: 'Description is too short' }
        ]}
      >
        <TextArea
          rows={3}
          placeholder="Describe the issue reported by the customer..."
          showCount
          maxLength={250}
        />
      </Form.Item>

      <Form.Item
        name="solvedIssues"
        label="Solved Issues / Repair Details"
        rules={[
          { required: true, message: 'Please describe the solution' },
          { min: 5, message: 'Description is too short' }
        ]}
      >
        <TextArea
          rows={3}
          placeholder="Details of the repair work performed..."
          showCount
          maxLength={250}
        />
      </Form.Item>

      <div style={{ display: 'grid', gridTemplateColumns: paymentMode === 'Bank Account' ? '1fr 1fr' : '1fr', gap: '16px' }}>
        <Form.Item
          name="paymentMode"
          label="Mode of Payment"
          rules={[{ required: true, message: 'Please select payment mode' }]}
        >
          <Select
            placeholder="Select Payment Mode"
            className="custom-select"
            suffixIcon={<WalletOutlined style={{ color: '#b2bec3' }} />}
          >
            <Option value="Cash">Cash</Option>
            <Option value="Mobile Money">Mobile Money</Option>
            <Option value="Bank Account">Bank Account</Option>
          </Select>
        </Form.Item>

        {paymentMode === 'Bank Account' && (
          <Form.Item
            name="accountNumber"
            label="Account Number"
            rules={[{ required: true, message: 'Please enter account number' }]}
          >
            <Input
              placeholder="e.g. 000-123-456"
              prefix={<BankOutlined style={{ color: '#b2bec3' }} />}
              className="custom-input"
            />
          </Form.Item>
        )}
      </div>

      <Form.Item
        name="amount"
        label="Amount Received (Rwf)"
        rules={[
          { required: true, message: 'Please enter the amount' },
          { type: 'number', min: 0, message: 'Amount cannot be negative' }
        ]}
      >
        <InputNumber
          style={{ width: '100%' }}
          formatter={value => `Rwf ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/Rwf\s?|(,*)/g, '')}
          placeholder="0"
          className="custom-input"
          prefix={<DollarOutlined style={{ color: '#b2bec3' }} />}
        />
      </Form.Item>

      <Form.Item
        name="additionalDetails"
        label="Additional Details (Optional)"
      >
        <TextArea
          rows={2}
          placeholder="Any extra notes (e.g. mileage, VIN, customer requests)..."
          className="custom-input"
        />
      </Form.Item>

      <Divider />

      <Form.Item>
        <div style={{ display: 'flex', gap: '10px' }}>
          {isEditing && (
            <Button onClick={onCancelEdit} block style={{ borderRadius: '20px', height: '45px' }}>
              Cancel
            </Button>
          )}
          <Button
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
            className="submit-btn"
            block
          >
            {isEditing ? 'UPDATE RECORD' : 'SAVE REPAIR RECORD'}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}

export default CarForm;
