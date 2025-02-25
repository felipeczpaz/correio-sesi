import os
import logging

# Set up logging to console
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(message)s')

# Define the copyright comment
copyright_comment = """\
/*
************************************************************
*                                                          *
*   Flowhooks Software - All Rights Reserved               *
*          (c) 2025 Felipe Cezar Zwerchowski Paz LTDA.     *
*                                                          *
*  This software is proprietary.                           *
*  Unauthorized use, reproduction, or distribution is      *
*  strictly prohibited.                                    *
*                                                          *
*  Author: Felipe Cezar Paz (git@felipecezar.com)          *
*  File:                                                   *
*  Description:                                            *
*                                                          *
************************************************************
*/
"""

def insert_comment_into_file(file_path):
    # Read the existing content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Check if the comment is already present
    if copyright_comment.strip() not in content:
        # Write the new content with the comment at the top
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(copyright_comment + content)
        # Log the insertion to console
        logging.info(f'Inserted copyright comment into: {file_path}')

def process_directory(directory):
    # Walk through the directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            # Insert the comment into the file
            insert_comment_into_file(file_path)

if __name__ == "__main__":
    # Specify the directory you want to process
    target_directory = input("Enter the directory path: ")
    process_directory(target_directory)
    print("Copyright comment inserted into all files. Check the console for details.")
