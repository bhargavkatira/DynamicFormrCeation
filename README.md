# DynamicFormrCeation

Created with CodeSandbox


#GIT CLONE

git clone https://github.com/your-username/dynamic-form-generator.git

cd dynamic-form-generator

#Install Dependencies

npm install

#Start the Development Server

npm start



----------------------------------


JSON Sample for testing

[
  {
    "name": "firstName",
    "label": "First Name",
    "type": "text",
    "validation": {
      "required": "First name is required",
      "minLength": {
        "value": 2,
        "message": "First name must be at least 2 characters"
      }
    }
  },
  {
    "name": "lastName",
    "label": "Last Name",
    "type": "text",
    "validation": {
      "required": "Last name is required",
      "minLength": {
        "value": 2,
        "message": "Last name must be at least 2 characters"
      }
    }
  },
  {
    "name": "email",
    "label": "Email Address",
    "type": "text",
    "validation": {
      "required": "Email is required",
      "pattern": {
        "value": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Invalid email address"
      }
    }
  },
  {
    "name": "bio",
    "label": "Bio",
    "type": "textarea",
    "validation": {
      "maxLength": {
        "value": 500,
        "message": "Bio cannot be more than 500 characters"
      }
    }
  },
  {
    "name": "gender",
    "label": "Gender",
    "type": "radio",
    "options": [
      { "label": "Male", "value": "male" },
      { "label": "Female", "value": "female" },
      { "label": "Other", "value": "other" }
    ],
    "validation": {
      "required": "Please select your gender"
    }
  },
  {
    "name": "country",
    "label": "Country",
    "type": "dropdown",
    "options": [
      { "label": "United States", "value": "us" },
      { "label": "Canada", "value": "ca" },
      { "label": "United Kingdom", "value": "uk" }
    ],
    "validation": {
      "required": "Please select your country"
    }
  },
  {
    "name": "newsletter",
    "label": "Subscribe to newsletter",
    "type": "checkbox"
  },
  {
    "name": "resume",
    "label": "Upload Resume",
    "type": "file",
    "validation": {
      "fileTypes": ["pdf", "doc", "docx"],
      "maxSize": 5,
      "message": "Resume must be a PDF or Word document under 5MB"
    }
  }
]

--------------------------------




