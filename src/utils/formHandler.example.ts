/**
 * Exemplo de integração do formulário de contato
 * 
 * Opções de integração:
 * 1. EmailJS (https://www.emailjs.com/) - Gratuito até 200 emails/mês
 * 2. Formspree (https://formspree.io/) - Gratuito até 50 submissões/mês
 * 3. Netlify Forms (se hospedar no Netlify)
 * 4. Backend próprio (Node.js + Express + Nodemailer)
 */

// Exemplo com EmailJS
export const sendEmailWithEmailJS = async (_formData: {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  mensagem: string;
}) => {
  // Instalar: npm install @emailjs/browser
  // import emailjs from '@emailjs/browser';
  
  // Configurar no EmailJS e usar:
  /*
  const serviceID = 'seu_service_id';
  const templateID = 'seu_template_id';
  const publicKey = 'sua_public_key';
  
  try {
    await emailjs.send(serviceID, templateID, {
      from_name: formData.nome,
      from_email: formData.email,
      phone: formData.telefone,
      company: formData.empresa,
      message: formData.mensagem,
    }, publicKey);
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error };
  }
  */
};

// Exemplo com Formspree
export const sendEmailWithFormspree = async (_formData: {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  mensagem: string;
}) => {
  // Formspree não requer instalação de pacotes
  // Basta fazer POST para o endpoint deles
  
  /*
  const formspreeEndpoint = 'https://formspree.io/f/seu_form_id';
  
  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        empresa: formData.empresa,
        mensagem: formData.mensagem,
      }),
    });
    
    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Erro ao enviar formulário');
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error };
  }
  */
};

// Exemplo de validação adicional
export const validateForm = (formData: {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}) => {
  const errors: string[] = [];
  
  if (formData.nome.length < 3) {
    errors.push('Nome deve ter pelo menos 3 caracteres');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errors.push('E-mail inválido');
  }
  
  const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  if (!phoneRegex.test(formData.telefone)) {
    errors.push('Telefone inválido');
  }
  
  if (formData.mensagem.length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};
