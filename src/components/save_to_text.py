import os
import shutil
import re

def get_next_version_dir(base_name="txts_V"):
    """Find the next available version number for the directory."""
    # Get project root (go up two levels from src/components)
    script_dir = os.path.dirname(os.path.abspath(__file__)) if "__file__" in globals() else os.getcwd()
    root_dir = os.path.normpath(os.path.join(script_dir, "..", "..", ".."))
    
    # Find all directories matching the pattern txts_V{number}
    existing_dirs = [d for d in os.listdir(root_dir) if os.path.isdir(os.path.join(root_dir, d))]
    
    version_numbers = []
    for dir_name in existing_dirs:
        match = re.match(rf"{base_name}(\d+)", dir_name)
        if match:
            version_numbers.append(int(match.group(1)))
    
    # Get the next version number
    next_version = max(version_numbers) + 1 if version_numbers else 1
    new_dir = os.path.join(root_dir, f"{base_name}{next_version}")
    
    return new_dir

def convert_files_to_txt(source_dirs, specific_files=None, output_dir=None):
    # Get the next versioned directory if not provided
    if output_dir is None:
        output_dir = get_next_version_dir()
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Creating directory: {os.path.basename(output_dir)}\n")
    
    # Ensure source_dirs is a list
    if isinstance(source_dirs, str):
        source_dirs = [source_dirs]
    
    # Process each source directory
    for source_dir in source_dirs:
        if not os.path.exists(source_dir):
            print(f"Warning: Source directory not found: {source_dir}")
            continue
        
        print(f"Processing directory: {source_dir}")
        
        for filename in os.listdir(source_dir):
            # Process .js and .css files
            if filename.endswith((".js", ".css")):
                source_path = os.path.join(source_dir, filename)
                
                # Skip if it's a directory
                if os.path.isdir(source_path):
                    continue
                
                with open(source_path, 'r', encoding='utf-8') as source_file:
                    content = source_file.read()
                
                # Save to output directory with .txt extension
                txt_filename = f"{filename}.txt"
                output_path = os.path.join(output_dir, txt_filename)
                
                with open(output_path, 'w', encoding='utf-8') as txt_file:
                    txt_file.write(content)
                
                print(f"  Converted: {filename} -> {txt_filename}")
        
        print()
    
    # Process specific files if provided
    if specific_files:
        if isinstance(specific_files, str):
            specific_files = [specific_files]
        
        print("Processing specific files:")
        for file_path in specific_files:
            if not os.path.exists(file_path):
                print(f"  Warning: File not found: {file_path}")
                continue
            
            filename = os.path.basename(file_path)
            
            with open(file_path, 'r', encoding='utf-8') as source_file:
                content = source_file.read()
            
            # Save to output directory with .txt extension
            txt_filename = f"{filename}.txt"
            output_path = os.path.join(output_dir, txt_filename)
            
            with open(output_path, 'w', encoding='utf-8') as txt_file:
                txt_file.write(content)
            
            print(f"  Converted: {filename} -> {txt_filename}")
        
        print()
    
    print(f"All files saved to: {os.path.basename(output_dir)}")

# Usage: Multiple directories + specific files
convert_files_to_txt(
    source_dirs=["./src/components", "./src/styles"],
    specific_files=["./src/App.js"]
)