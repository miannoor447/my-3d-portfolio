type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Noor Ud Deen — Portfolio',
    fullName: 'Noor Ud Deen',
    email: 'noor.shafique2@gmail.com',
  },
  hero: {
    name: 'Noor Ud Deen',
    p: ['A Full Stack Developer','Transforming imagination into interactive reality,', 'where creativity meets precision'],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm a skilled full-stack developer with experience in TypeScript and JavaScript, 
and hands-on expertise across React, Next.js, Node.js, Express, and NestJS. 
I work confidently with both relational and NoSQL databases to deliver clean, scalable, and user-focused solutions. 
I'm passionate about turning ideas into smooth digital experiences through collaboration and creative problem-solving. 
Let's build something impactful together!`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `A glimpse into the projects that define my journey — each one built with passion, precision, 
and problem-solving at its core. Explore the live demos and code to see how I turn ideas into real, working products.`,
    },
  },
};
