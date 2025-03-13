import pandas as pd
import os

def csv_to_html_table(csv_file):
    df = pd.read_csv(csv_file)
        
    html_output = ""
    # 内容がずれる時はcsvファイルをこの形にする.
    for i, row in df.iterrows():
        html_output += f'<table class="themes theme"><tr>' #ここは手打ちして分野に対応した数字を打つ
        html_output += f'<td colspan="2" style="background-color:#333;color:#ddd;">第27回合同合宿</td></tr>'#回数を変更する
        html_output += f'<tr><td width="200">教科書タイトル</td><td>{str(row.iloc[0])}</td></tr>'
        html_output += f'<tr><td width="200">教科書の良い点・悪い点とその理由</td><td>{str(row.iloc[1])}</td></tr>'
        html_output += f'<tr><td width="200">教科書のリレーセミナーに適している点・そうでない点とその理由</td><td>{str(row.iloc[2])}</td></tr>'
        html_output += f'<tr><td width="200">教科書の適切な読み進め方</td><td>{str(row.iloc[3])}</td></tr>'
        html_output += f'<tr><td width="200">教科書をスムーズに読むための前提知識</td><td>{str(row.iloc[4])}</td></tr>'
        html_output += "</table>\n\n"
    
    return html_output

# 使用例（csv_file=いじりたいcsvファイル）
csv_file = r"C:\Users\nekou\Desktop\数物\physmathseminar.github.io\camp\班長アンケ\27th.csv"
html_result = csv_to_html_table(csv_file)
current_dir = os.path.dirname(os.path.abspath(__file__))

# 保存するファイル名
file_name = "output.txt"
file_path = os.path.join(current_dir, file_name)
with open(file_path, "w", encoding="utf-8") as f:
    f.write(html_result)